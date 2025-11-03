import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Sparkles } from "lucide-react";
import { RoleToggle } from "@/components/admin/RoleToggle";

export default async function AdminPage() {
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

      {/* Admin Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-heading font-bold mb-2">Admin Portal</h1>
            <p className="text-xl text-white/60">
              Toggle between poster and doer views to see both sides of the marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Poster View Card */}
            <div className="glass p-8 rounded-lg border border-[#F2CF07]/20 hover:border-[#F2CF07]/50 transition-all">
              <div className="w-12 h-12 bg-[#F2CF07]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Poster Dashboard</h3>
              <p className="text-white/60 mb-6">
                View the platform as a task poster. See posted tasks, active projects, and doer matches.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Post new tasks</li>
                <li>• Monitor active tasks</li>
                <li>• Review completed work</li>
                <li>• Manage payments</li>
              </ul>
            </div>

            {/* Doer View Card */}
            <div className="glass p-8 rounded-lg border border-[#6AC670]/20 hover:border-[#6AC670]/50 transition-all">
              <div className="w-12 h-12 bg-[#6AC670]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Doer Dashboard</h3>
              <p className="text-white/60 mb-6">
                View the platform as a task doer. Browse available tasks, access AI workspace, and track earnings.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Browse available tasks</li>
                <li>• AI-powered workspace</li>
                <li>• Track active tasks</li>
                <li>• View earnings history</li>
              </ul>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#6AC670] mb-2">0</div>
              <div className="text-sm text-white/60">Total Users</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#F2CF07] mb-2">0</div>
              <div className="text-sm text-white/60">Active Tasks</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#6AC670] mb-2">0</div>
              <div className="text-sm text-white/60">Completed</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#F2CF07] mb-2">$0</div>
              <div className="text-sm text-white/60">Total GMV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
