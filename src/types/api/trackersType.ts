export type TrackersType = {
  id: number;
  attributes: {
    deviceImage?: string;
    'processing.copyAttributes'?: string;
    'decoder.timezone'?: string;
    speedLimit?: number;
    'web.reportColor'?: string;
    deviceInactivityStart?: number;
  };
  groupId: number;
  calendarId: number;
  protocol?: string | null;
  name: string;
  uniqueId: string;
  status: string;
  lastUpdate: string;
  positionId: number;
  phone?: string | null;
  model?: string | null;
  contact?: string | null;
  category?: string | null;
  disabled: boolean;
  expirationTime?: string | null;
};
