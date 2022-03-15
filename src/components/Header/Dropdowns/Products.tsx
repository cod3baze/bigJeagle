import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTriggerItem,
  DropdownMenuSeparator,
  RightSlot,
} from "./";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { FiChevronDown } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Products() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={`${styles.button} ${styles.products}`} type="button">
          <span>Products</span>
          <FiChevronDown size={24} color="var(--gray-300)" />
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
