import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function MemberProfile() {
return (
    <>
        {/* Other content of the component */}
        <div className="flex items-center mb-4 gap-4 px-4">
            <UserButton afterSwitchSessionUrl="/"/>
        </div>
    </>
);
}
