export default function Page() {
  return (
    <div className="w-full h-screen flex">
      <div
        className="w-[72px] h-full"
        style={{ backgroundColor: "rgb(32, 34, 37)" }}
      ></div>
      <div
        className="w-[240px] h-full"
        style={{ backgroundColor: "rgb(47, 49, 54)" }}
      ></div>
      <div
        className="flex-1"
        style={{ backgroundColor: "rgb(54, 57, 63)" }}
      ></div>
    </div>
  );
}
