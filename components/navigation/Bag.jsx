import IconEcommerce_bag from "../react-svg-icons/IconEcommerce_bag"

export default function Bag(){
    return (
        <div className="w-14 flex flex-col items-center justify-between gap-2">
            <IconEcommerce_bag width="1.25rem" height="1.25rem" />
            <p className="">Bag</p>
        </div>
    )
}