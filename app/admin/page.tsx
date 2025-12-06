import {    
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"



export default function AdminPage() {
  return (
    <div>
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
    <Label htmlFor="email">Your email address</Label>
    <Checkbox />
  </div>
  );
}

