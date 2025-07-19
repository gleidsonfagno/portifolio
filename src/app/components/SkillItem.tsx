import Image from "next/image";

export function SkillItem({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex-shrink-0 w-24 h-24 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow cursor-pointer group">
      <Image
        src={src}
        alt={label}
        width={1080}
        height={1080}
        className="w-10 h-10 mb-1 group-hover:scale-110 transition-transform"
      />
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center px-1">
        {label}
      </span>
    </div>
  );
}
