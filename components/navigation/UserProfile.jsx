import IconUser_male from "../react-svg-icons/IconUser_Male"

export default function UserProfile(){
    return (
        <div className="w-14 flex flex-col items-center justify-between gap-2">
            <IconUser_male width="1.25rem" height="1.25rem" />
            <p className="">Profile</p>
        </div>
    )
}