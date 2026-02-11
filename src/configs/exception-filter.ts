import { ExceptionFilter } from "@nestjs/common";
import { DomainExceptionFilter } from "src/comon/api/domain-exception-filter";

export const exceptionFilterList: ExceptionFilter[] = [
    new DomainExceptionFilter()
]