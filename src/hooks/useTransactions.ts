import { useContext } from 'react';
import { TransactionContext } from '../contexts/transactions';

const useTransaction = () =>{
    const context = useContext(TransactionContext);
    return context;
}
export default useTransaction;