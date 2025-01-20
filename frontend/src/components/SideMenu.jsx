import ActiveLink from "./ActiveLink";

const SideMenu = () => {
  return (
    <div className="h-[100vh] w-[20%] fixed flex justify-center outline outline-1 outline-gray-300 pt-10">
      <div className="flex flex-col justify-start place-items-start w-full mx-3 gap-2">
        <ActiveLink to="/">Job Feed</ActiveLink>
        <ActiveLink to="/internshala">Internships</ActiveLink>
        <ActiveLink to="/fulltime-jobs">Fulltime Jobs</ActiveLink>
        <ActiveLink to="/applied">Applied</ActiveLink>
        <ActiveLink to="/messages">Messages</ActiveLink>
      </div>
    </div>
  );
};

export default SideMenu;
