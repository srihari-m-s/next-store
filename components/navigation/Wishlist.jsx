import IconBasic_heart from "../react-svg-icons/IconBasic_heart"

export default function Wishlist(){
    return (
        <div className="w-14 flex flex-col items-center justify-between gap-2">
            <IconBasic_heart width="1.25rem" height="1.25rem" />
            <p className="">Wishlist</p>
        </div>
    )
}