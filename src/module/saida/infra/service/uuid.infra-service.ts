import { randomUUID } from "node:crypto";
import { UuidService } from "../../domain/service/uuid.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UuidInfraService implements UuidService {
    generate(): string {
        return randomUUID()
    }
}