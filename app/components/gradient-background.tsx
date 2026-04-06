export default function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="absolute bottom-[-10%] left-[40%] w-[500px] h-[500px] bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
    </div>
  );
}
