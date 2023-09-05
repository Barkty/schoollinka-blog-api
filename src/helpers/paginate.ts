export const getPagination = (page: number, size: number) => {
    const limit = size ? +size : 0;
    const offset = page ? page * limit : 10;

    return { limit, offset };
};

export const paginate = (data: any, page: number, limit: number) => {
    const [ result, totalItems ] = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, docs: result, totalPages, page: currentPage };
};