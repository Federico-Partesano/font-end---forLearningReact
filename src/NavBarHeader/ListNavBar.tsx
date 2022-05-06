import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import "./ListNavBar.scss";

interface IElementListNav {
  labels: string[];
}

const ListNavBar: FC<IElementListNav> = ({ labels }) => {
  return (
    <>
      {labels &&
        labels.map((label, index) => {
          return (
            <Popover trigger="hover" key={index} placement="top">
              <PopoverTrigger>
                <Text fontSize={15} marginBottom={1} cursor={"pointer"} isTruncated>{label}</Text>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>{label}</PopoverBody>
              </PopoverContent>
            </Popover>
          );
        })}
    </>
  );
};

export default ListNavBar;
