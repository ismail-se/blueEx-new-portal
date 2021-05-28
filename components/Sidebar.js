import SidebarInner from "./SidebarInner";

const Sidebar = () => {
  return (
    <div className="hidden z-10 lg:flex flex-col fixed bg-white shadow-sm  w-[16rem] h-full overflow-y-auto ">
      <div className="mt-[4rem]">
        <SidebarInner />
      </div>
    </div>
  );
};

export default Sidebar;
