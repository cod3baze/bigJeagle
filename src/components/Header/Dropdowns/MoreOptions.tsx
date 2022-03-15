import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTriggerItem,
  DropdownMenuSeparator,
  RightSlot,
} from "./";

import styles from "./styles.module.scss";

import { HamburgerMenuIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export function MoreOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="More options"
          className={styles.collapsibleButton}
          type="button"
        >
          <HamburgerMenuIcon color="var(--gray-100)" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        <DropdownMenu>
          <DropdownMenuTriggerItem>
            More Tools
            <RightSlot>
              <ChevronRightIcon />
            </RightSlot>
          </DropdownMenuTriggerItem>

          <DropdownMenuContent sideOffset={2} alignOffset={-5}>
            <DropdownMenuItem>
              Save Page As… <RightSlot>⌘+S</RightSlot>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenuSeparator />
        <DropdownMenuItem>&copy; Genesis systems</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
