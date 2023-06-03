import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ISidebarItemProps {
  icon: IconType,
  label: string,
  href: string,
  active: boolean,
}

function SidebarItem({ icon, label, href, active }: ISidebarItemProps) {

  return (
    <Link 
      className={twMerge(`
        flex
        flex-row
        h-auto
        items-center
        w-full
        gap-x-4
        text-md
        font-medium
        cursor-pointer
        hover:text-white
        text-neutral-400
        py-1
      `,
        active && "text-white"
      )}
      href={href}>
      {label}
    </Link>
  )
}

export default SidebarItem
