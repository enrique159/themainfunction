import type { UUID } from "~/app/shared/types/Id";
import type { TPrivacyPostOption } from "~/types";
import type { IUser } from "../../users/domain/user";

export interface IPost {
  id: UUID;
  content: string;
  privacy: TPrivacyPostOption;
  media?: string;
  script?: string;
  userId: UUID;
  user: IUser;
  organizationId?: UUID;
  channelId?: UUID;
  createdAt: Date;
  updatedAt?: Date;
}