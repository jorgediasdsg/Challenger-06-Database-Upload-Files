import { getCustomRepository, TransactionRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import Transactionrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(Transactionrepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new Error('Transactions does not exist');
    }
    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
