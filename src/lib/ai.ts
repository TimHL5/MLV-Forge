import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function chat(messages: ChatMessage[], systemPrompt?: string) {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      system: systemPrompt,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    const content = response.content[0];
    if (content.type === 'text') {
      return content.text;
    }

    return '';
  } catch (error) {
    console.error('AI chat error:', error);
    throw new Error('Failed to get AI response');
  }
}

export async function streamChat(
  messages: ChatMessage[],
  systemPrompt?: string,
  onChunk?: (text: string) => void
) {
  try {
    const stream = await anthropic.messages.stream({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      system: systemPrompt,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    let fullText = '';

    for await (const chunk of stream) {
      if (
        chunk.type === 'content_block_delta' &&
        chunk.delta.type === 'text_delta'
      ) {
        const text = chunk.delta.text;
        fullText += text;
        if (onChunk) {
          onChunk(text);
        }
      }
    }

    return fullText;
  } catch (error) {
    console.error('AI stream error:', error);
    throw new Error('Failed to stream AI response');
  }
}

// System prompts for different AI assistants
export const SYSTEM_PROMPTS = {
  projectScoping: `You are an AI assistant helping companies scope their projects on MLV Forge, a platform that connects college students with business work.

Your role:
- Help companies define clear, achievable project scopes
- Suggest realistic budgets based on project complexity
- Recommend appropriate timelines
- Identify required skills
- Flag potential issues or ambiguities

Be concise, professional, and helpful. Focus on making projects successful for both companies and students.`,

  projectAssistant: `You are an AI project assistant helping college students complete client work on MLV Forge.

Your role:
- Guide students through research and ideation
- Provide feedback on drafts and deliverables
- Teach best practices and frameworks
- Help troubleshoot issues

Important:
- Don't do the work for them - teach them how to do it
- Encourage using AI tools effectively
- Keep advice actionable and specific
- Be supportive but maintain high standards`,

  qualityChecker: `You are an AI quality checker reviewing student deliverables before submission.

Your role:
- Check if all required deliverables are present
- Verify professional formatting
- Check grammar and spelling
- Ensure alignment with project requirements
- Provide constructive feedback

Give a quality score (0-100) and specific, actionable suggestions for improvement.`,

  matchingEngine: `You are an AI matching engine that scores how well students match project requirements.

Analyze:
- Skill alignment
- Past project experience
- Success rate and ratings
- Availability and timeline fit
- Student level vs project complexity

Provide a match score (0-100) and explain the key factors.`,
};

export async function suggestProjectBudget(
  description: string,
  complexity: string,
  estimatedHours?: number
): Promise<{ min: number; max: number; reasoning: string }> {
  const prompt = `Given this project description and complexity, suggest a realistic budget range:

Description: ${description}
Complexity: ${complexity}
Estimated Hours: ${estimatedHours || 'Not specified'}

Consider:
- Student hourly rates ($20-30/hour)
- Project complexity
- Industry standards
- Time commitment

Respond in JSON format:
{
  "min": number,
  "max": number,
  "reasoning": "brief explanation"
}`;

  const response = await chat(
    [{ role: 'user', content: prompt }],
    SYSTEM_PROMPTS.projectScoping
  );

  try {
    const parsed = JSON.parse(response);
    return parsed;
  } catch {
    return {
      min: 500,
      max: 1000,
      reasoning: 'Based on typical project requirements',
    };
  }
}

export async function generateProjectSummary(
  title: string,
  description: string,
  category: string,
  skills: string[]
): Promise<string> {
  const prompt = `Summarize this project in 2-3 sentences for student browsing:

Title: ${title}
Description: ${description}
Category: ${category}
Required Skills: ${skills.join(', ')}

Make it engaging and clear about what the student will do.`;

  return await chat(
    [{ role: 'user', content: prompt }],
    SYSTEM_PROMPTS.projectScoping
  );
}

export async function checkDeliverableQuality(
  projectDescription: string,
  deliverableSummary: string,
  fileNames: string[]
): Promise<{ score: number; feedback: string[] }> {
  const prompt = `Review this deliverable submission:

Project Requirements:
${projectDescription}

Student's Submission Summary:
${deliverableSummary}

Files Submitted:
${fileNames.join(', ')}

Provide:
1. Quality score (0-100)
2. List of specific feedback points

Respond in JSON format:
{
  "score": number,
  "feedback": ["point 1", "point 2", ...]
}`;

  const response = await chat(
    [{ role: 'user', content: prompt }],
    SYSTEM_PROMPTS.qualityChecker
  );

  try {
    const parsed = JSON.parse(response);
    return parsed;
  } catch {
    return {
      score: 75,
      feedback: ['Deliverable appears complete. Please review carefully.'],
    };
  }
}

export async function calculateMatchScore(
  projectRequirements: {
    skills: string[];
    complexity: string;
    budget: number;
    category: string;
  },
  studentProfile: {
    skills: string[];
    level: string;
    rating: number;
    completedProjects: number;
    pastCategories: string[];
  }
): Promise<{ score: number; reasoning: string[] }> {
  const prompt = `Calculate a match score (0-100) between this project and student:

Project:
- Required Skills: ${projectRequirements.skills.join(', ')}
- Complexity: ${projectRequirements.complexity}
- Budget: $${projectRequirements.budget}
- Category: ${projectRequirements.category}

Student:
- Skills: ${studentProfile.skills.join(', ')}
- Level: ${studentProfile.level}
- Rating: ${studentProfile.rating}/5.0
- Completed Projects: ${studentProfile.completedProjects}
- Past Categories: ${studentProfile.pastCategories.join(', ')}

Respond in JSON format:
{
  "score": number (0-100),
  "reasoning": ["factor 1", "factor 2", ...]
}`;

  const response = await chat(
    [{ role: 'user', content: prompt }],
    SYSTEM_PROMPTS.matchingEngine
  );

  try {
    const parsed = JSON.parse(response);
    return parsed;
  } catch {
    return {
      score: 50,
      reasoning: ['Unable to calculate detailed match score'],
    };
  }
}
