export interface IEmployeeController{
    createNewEmployee(req: Request, res: Response): Promise<Response>;
    getAllEmployee(req: Request, res: Response): Promise<Response>;
    updateEmployee(req: Request, res: Response): Promise<Response>;
    deleteEmployee(req: Request, res: Response): Promise<Response>;
}