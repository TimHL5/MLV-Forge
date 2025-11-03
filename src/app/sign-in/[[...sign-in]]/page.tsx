import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(to bottom right, #FCFCFC, #F3F3F1)' }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-heading font-bold mb-2"
            style={{
              background: 'linear-gradient(135deg, #6AC670 0%, #F2CF07 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            MLV Forge
          </h1>
          <p className="text-lg" style={{ color: '#484848' }}>
            Welcome back to your workspace
          </p>
        </div>
        <SignIn />
      </div>
    </div>
  );
}
