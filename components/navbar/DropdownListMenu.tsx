import { AlignLeft } from 'lucide-react'
import UserIcon from './UserIcon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { links } from '@/utils/links'
import Link from 'next/link'
import SignOutLinks from './SignOutLinks'
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'

const DropdownListMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignLeft />
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* ล็อกอินแล้ว */}
          <SignedIn>
            {links.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <Link href={link.href} className="cursor-pointer">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutLinks />
            </DropdownMenuItem>
          </SignedIn>

          <SignedOut>
            <DropdownMenuItem>
              {/* ยังไม่ได้ล็อกอิน */}
              <SignInButton mode="modal">
                <button className="w-full text-left">Login</button>
              </SignInButton>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button className="w-full text-left">Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default DropdownListMenu
