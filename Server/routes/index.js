import dailyExpenseRouter from "./dailyExpenseRoutes";
import expenseRouter from "./expenseRoutes";
import intervalRouter from "./intervalRoutes";
import userRourter from "./userRoutes"

const router = {userRourter, expenseRouter, intervalRouter, dailyExpenseRouter};
export default router;