import ProfileCard from "./ProfileCard";

export default {
  title: "Components/ProfileCard",
  component: ProfileCard,
  argTypes: {
    name: { control: "text" },
    role: { control: "text" },
    avatar: { control: "text" },
    status: {
      control: { type: "radio" },
      options: ["online", "offline"],
    },
  },
};
const Template = (args) => <ProfileCard {...args} />;
export const Online = Template.bind({});
Online.args = {
  name: "Odilbek Murodov",
  role: "Backend Developer",
  avatar: "https://i.pravatar.cc/150?img=8",
  status: "online",
};

export const Offline = Template.bind({});
Offline.args = {
  name: "Dilnoza Rahimova",
  role: "Project Manager",
  avatar: "https://i.pravatar.cc/150?img=11",
  status: "offline",
};
