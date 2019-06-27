import { Network } from '../utils/network';
import { SignedTransaction } from '../protos';
export declare enum FinalTransactionStatus {
    Unknown = "Unknown",
    Started = "Started",
    Failed = "Failed",
    Completed = "Completed"
}
export declare type TransactionLog = {
    hash: string;
    lines: Array<string>;
    receipts: Array<number[]>;
    result?: Uint8Array;
};
export declare type FinalTransactionResult = {
    status: FinalTransactionStatus;
    logs: TransactionLog[];
};
export declare abstract class Provider {
    abstract getNetwork(): Promise<Network>;
    abstract sendTransaction(signedTransaction: SignedTransaction): Promise<FinalTransactionResult>;
    abstract txStatus(txHash: Uint8Array): Promise<FinalTransactionResult>;
    abstract query(path: string, data: string): Promise<any>;
}
export declare function getTransactionLastResult(txResult: FinalTransactionResult): any;
