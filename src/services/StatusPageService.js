import { StatusPages } from '../models';

class StatusPageService {

  static async getAll({ criterions }) {
    try {
      const { where, limit, offset, order } = criterions;
      const { count, rows } = await StatusPages.findAndCountAll({
        where,
        limit,
        offset,
        order,
      });

      return { rows, count, total: count };
    } catch (error) {
      throw error;
    }
  }

  static async getById({ uuid, user }) {
    try {
      const statusPage = await StatusPages.findOne({
        where: {
          uuid,
          userId: user.id,
        }
      });

      return statusPage;
    } catch (error) {
      throw error;
    }
  }

}

export default StatusPageService;