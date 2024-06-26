"use client";
import  CreateServerModal  from "@/components/modal/create-server-modal";
import { useEffect, useState } from "react";
import InviteModal from "../modal/invite-modal";
import EditServerModal from "../modal/edit-server-modal";
import MembersModal from "../modal/members-modal";
import CreateChannelModal from "../modal/create-channel-modal";
import LeaveServerModal from "../modal/leave-server-modal";
import DeleteServerModal from "../modal/delete-server-modal";
import DeleteChannelModal from "../modal/delete-channel-modal";
import EditChannelModal from "../modal/edit-channel-modal";
import MessageFileModal from "../modal/message-file-modal";
import DeleteMessageModal from "../modal/delete-message-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);
    
    if(!isMounted) {
        return null;
    }
    return (
        <>
        <CreateServerModal/>
        <InviteModal/>
        <EditServerModal/>
        <MembersModal/>
        <CreateChannelModal/>
        <LeaveServerModal/>
        <DeleteServerModal/>
        <DeleteChannelModal/>
        <EditChannelModal/>
        <MessageFileModal/>
        <DeleteMessageModal/>
        </>
    )
}