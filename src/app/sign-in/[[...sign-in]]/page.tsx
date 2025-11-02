import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue to MLV Forge</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "glass",
            },
          }}
        />
      </div>
    </div>
  );
}
