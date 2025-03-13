function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-8 max-w-xs mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 md:max-w-sm">
        <img className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto " src="https://via.placeholder.com/150" alt="User" />
        <h1 className="text-lg text-blue-800 my-4 md:text-xl">John Doe</h1>
        <p className="text-gray-600 text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;