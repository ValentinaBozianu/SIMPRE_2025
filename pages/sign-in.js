import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <SignIn routing="hash" />
    </div>
  );
}
