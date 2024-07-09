import Image from "next/image"
import { LoggedInButton } from "../auth/LoggedInButton"
import { SignInButton } from "./SignInButton"

export const Header = async () => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex-1">
                <Image
                    src="/icon.png"
                    width={32}
                    height={32}
                    alt="guide-peche.com logo" />
            </div>
            <LoggedInButton />
        </div>
    )
}
