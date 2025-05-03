


function Nav({profiles}) {
    const {profile}=profiles
   
    return (

        <div className="max-w-7xl mx-auto fixed top-0 z-60 navbar  shadow-sm flex justify-between h-25 bg-white text-black">
            <h1 className="font-bold text-xl lg:text-3xl md:text-2xl">Knowledge Cafe</h1>
           
            <div class="avatar avatar-placeholder">
        <div class="bg-neutral text-neutral-content w-12 rounded-full">
         <img className="" src={profile} alt="" />
          </div>
         </div>
            
  
        </div>

    )
}
export default Nav