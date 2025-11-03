import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Sparkles } from "lucide-react";
import { RoleToggle } from "@/components/admin/RoleToggle";

export default async function AdminDoerViewPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Check if user is admin
  const isAdmin = user.publicMetadata?.isAdmin as boolean;
  const email = user.emailAddresses[0]?.emailAddress || "";
  const isMLVEmail = email.endsWith('@mlvignite.com');

  if (!isAdmin && !isMLVEmail) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#6AC670] to-[#F2CF07] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0a0a0a]" />
              </div>
              <span className="text-xl font-heading font-bold gradient-text">MLV Forge</span>
            </div>

            {/* Admin Badge */}
            <div className="px-3 py-1 bg-gradient-to-r from-[#6AC670]/20 to-[#F2CF07]/20 border border-[#6AC670]/30 rounded-full">
              <span className="text-xs font-mono font-medium text-[#6AC670]">ADMIN</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <RoleToggle />
            <span className="text-sm text-white/60">
              {user.firstName || email}
            </span>
          </div>
        </div>
      </nav>

      {/* Doer Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-heading font-bold mb-2">Doer Dashboard (Admin View)</h1>
            <p className="text-xl text-white/60">
              Viewing the platform as a task doer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-lg">
              <h3 className="font-heading font-bold mb-2">Browse Tasks</h3>
              <p className="text-sm text-white/60 mb-4">
                Find tasks that match your skills and interests
              </p>
              <span className="text-sm text-white/40">Coming soon</span>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="font-heading font-bold mb-2">Active Tasks</h3>
              <p className="text-sm text-white/60 mb-4">
                Work on your current tasks with AI assistance
              </p>
              <span className="text-sm text-white/40">Coming soon</span>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="font-heading font-bold mb-2">Your Earnings</h3>
              <p className="text-sm text-white/60 mb-4">
                Track your income and completed tasks
              </p>
              <span className="text-sm text-white/40">Coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
