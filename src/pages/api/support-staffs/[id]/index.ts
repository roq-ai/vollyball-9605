import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { supportStaffValidationSchema } from 'validationSchema/support-staffs';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.support_staff
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getSupportStaffById();
    case 'PUT':
      return updateSupportStaffById();
    case 'DELETE':
      return deleteSupportStaffById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSupportStaffById() {
    const data = await prisma.support_staff.findFirst(convertQueryToPrismaUtil(req.query, 'support_staff'));
    return res.status(200).json(data);
  }

  async function updateSupportStaffById() {
    await supportStaffValidationSchema.validate(req.body);
    const data = await prisma.support_staff.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteSupportStaffById() {
    const data = await prisma.support_staff.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
