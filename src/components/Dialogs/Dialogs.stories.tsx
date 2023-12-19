import React from "react";
import { Story, Meta } from "@storybook/react";
import {Dialogs, DialogsPropsType} from "./Dialogs";
import {DialogType} from "../../redux/dialogsReducer";
import {BrowserRouter as Router} from "react-router-dom";

export default {
    title: "Components/Dialogs",
    component: Dialogs,
    decorators: [
        (Story) => (
            <Router> {/* Вклади компонент Dialogs в Router */}
                <Story />
            </Router>
        ),
    ],
} as Meta;

const Template: Story<DialogsPropsType> = (args) => <Dialogs {...args} />;

const dialogsData: DialogType[] = [
    { id: '1', name: "John" },
    { id: '2', name: "Jane" },
    { id: '3', name: "Bob" },
];

const messagesData = [
    { id: '1', messageText: "Hello!" },
    { id: '2', messageText: "How are you?" },
    { id: '3', messageText: "Nice to meet you!" },
];

export const Story1 = Template.bind({});
Story1.args = {
    dialogsData,
    messagesData,
    newMessage: "",
    onChangeHandlerCB: () => {},
    sendMessageCB: () => {},
};