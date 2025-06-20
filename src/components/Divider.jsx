export default function Divider() {
  return (
    <div className="flex items-center w-[70%] mx-auto px-[32px] py-[24px]">
      {/* Left circle */}
      <div className="w-[16px] h-[16px] bg-[#FFFACD] rounded-full" />
      {/* Middle line */}
      <div className="flex-grow h-[4px] bg-[#FFFACD]" />
      {/* Right circle */}
      <div className="w-[16px] h-[16px] bg-[#FFFACD] rounded-full" />
    </div>
  )
}