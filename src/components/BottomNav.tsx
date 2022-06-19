export default function BottomNav() {
  return (
    <div className="flex items-center justify-between w-full py-1 bg-black shadow-md bot-0">
      <p className="p-12 text-xl font-bold text-left text-white">
        Technical test for Eurosport
      </p>
      <p className="p-12 text-base font-medium text-white">
        made with
        <span className="px-1 text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
          passion
        </span>
        by
        <span className="px-1 font-extrabold">Adrien Soulié</span>
      </p>
    </div>
  );
}
