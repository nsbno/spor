import * as icons from "@vygruppen/spor-icon-react";

type IconProps = {
  iconName: string;
};

export const getIcon = ({ iconName }: IconProps) => {
  const iconNameWithSuffix = formatIconName(iconName);
  const Icon = icons[iconNameWithSuffix as keyof typeof icons];

  if (!Icon) {
    return null;
  }

  return <Icon />;
};

const filledIconsList = new Set([
  "dropdown-down",
  "dropdown-left",
  "dropdown-right",
  "dropdown-up",
  "notification-receieved",
  "position-dot",
]);

function formatIconName(iconName: string) {
  const transform = iconName.replaceAll(/-(.)/g, (_, char) =>
    char.toUpperCase(),
  );
  switch (iconName) {
    case "vy": {
      return "Vy30Icon";
    }

    case "playroom": {
      return "PlayRoomOutline30Icon";
    }

    case "childseat": {
      return "ChildSeatOutline30Icon";
    }

    case "coffeemachine": {
      return "CoffeeMachineOutline30Icon";
    }

    case "facebook": {
      return "Facebook30Icon";
    }

    case "maxi-taxi": {
      return "MaxitaxiOutline30Icon";
    }

    case "notification-recieved": {
      return "NotificationReceivedOutline30Icon";
    }

    case "ski-card": {
      return "SkicardOutline30Icon";
    }

    case "cargo-net": {
      return "CargoNet30Icon";
    }

    default: {
      return (
        transform.charAt(0).toUpperCase() +
        transform.slice(1) +
        (filledIconsList.has(iconName) ? "Fill" : "Outline") +
        30 +
        "Icon"
      );
    }
  }
}
