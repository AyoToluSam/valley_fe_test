import { Brain, HeartHandshake, Mail, Plus, SendHorizonal } from "lucide-react";
import type { IconBaseProps } from "react-icons/lib";
import {
  TbCalendarCheck,
  TbEditCircle,
  TbFlame,
  TbHandStop,
} from "react-icons/tb";

export const iconTypes = {
  PLUS: (props?: IconBaseProps) => <Plus {...props} />,
  STOP: (props?: IconBaseProps) => <TbHandStop {...props} />,
  MEETING: (props?: IconBaseProps) => <TbCalendarCheck {...props} />,
  HEART_HANDSHAKE: (props?: IconBaseProps) => <HeartHandshake {...props} />,
  FIRE: (props?: IconBaseProps) => <TbFlame {...props} />,
  BRAIN: (props?: IconBaseProps) => <Brain {...props} />,
  SEND: (props?: IconBaseProps) => <SendHorizonal {...props} />,
  EDIT: (props?: IconBaseProps) => <TbEditCircle {...props} />,
  MAIL: (props?: IconBaseProps) => <Mail {...props} />,
};

export type IconType = keyof typeof iconTypes;
