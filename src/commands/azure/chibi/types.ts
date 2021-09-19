import { Ship } from 'services/azure-service';
import Fuse from 'fuse.js';

export type ShipFuse = Fuse.FuseResult<Ship>;
