import Switch from "../ui/switch";

export default function Settings() {
  return (
    <div className="min-h-screen flex flex-col gap-4 py-4">
      <h1 className="text-lg font-semibold px-4">Settings</h1>
      <div className="flex flex-col gap-2 p-4 bg-white rounded-xl mx-2">
        <SettingsList
          title="Appearance"
          subTitle="Customize how your theme looks on your device"
          dropDown
        />
        <hr className="text-neutral-300" />
        <SettingsList
          title="Language"
          subTitle="Select your language"
          dropDown
          options={["English", "Hindi"]}
        />
        <hr className="text-neutral-300" />
        <SettingsList
          title="Two-factor Authentication"
          subTitle="Keep your account secure by anabling 2FA via mail"
          dropDown={false}
        />
        <hr className="text-neutral-300" />
        <SettingsList
          title="Mobile Push Notification"
          subTitle="Receive push notification"
          dropDown={false}
        />
        <hr className="text-neutral-300" />
        <SettingsList
          title="Desktop Notification"
          subTitle="Receive push notification on desktop"
          dropDown={false}
        />
        <hr className="text-neutral-300" />
        <SettingsList
          title="Email Notification"
          subTitle="Receive email notification"
          dropDown={false}
        />
      </div>
      <h1 className="mt-2 text-lg font-semibold px-4">Notices & Articles</h1>
      <Notice />
    </div>
  );
}

interface SettingsListProps {
  title: string;
  subTitle: string;
  dropDown: boolean;
  options?: string[];
}

export function SettingsList({
  title,
  subTitle,
  dropDown,
  options = ["light", "dark"],
}: SettingsListProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-medium">{title}</h2>
        <p className="text-sm text-neutral-500">{subTitle}</p>
      </div>
      {dropDown ? (
        <select name="" id="" className="p-2 text-sm bg-neutral-100 rounded-lg">
          {options.map((item) => {
            return <option value="item">{item}</option>;
          })}
        </select>
      ) : (
        <Switch />
      )}
    </div>
  );
}

export function Notice() {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-xl mx-2">
      <h2 className="text-lg font-medium">Upcoming Maintenance</h2>
      <p className="text-sm text-neutral-500">Published 12-Jan-2025</p>
      <p>
        We will perform system maintenance on 15-Feb-2025 from 2 PM to 4PM.
        Expect temporary downtime.
      </p>
      <button className="py-4 px-6 mt-4 rounded-xl bg-primary-500 w-fit">
        Read more
      </button>
    </div>
  );
}
