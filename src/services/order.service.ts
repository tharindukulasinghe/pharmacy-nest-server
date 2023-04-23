import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CommonService } from './common.service';
import { ApiResponse } from 'src/common/classes/api-response';
import { Order } from 'src/entities/order.entity';
import { SelectBillDto } from 'src/dtos/bill';

@Injectable()
export class OrderService extends CommonService {
  constructor(dataSource: DataSource) {
    super(dataSource);
  }

  async create(order: Order) {
    const apiResponse = new ApiResponse();
    try {
      order.status = 1;
      const entity = await this.entityManager.save(Order, order);
      apiResponse.data = entity;
    } catch (error) {
      apiResponse.error = true;
      apiResponse.message = error.message;
    }

    return apiResponse;
  }

  async findAll() {
    const apiResponse = new ApiResponse();
    try {
      const entity = await this.entityManager.find(Order);
      apiResponse.data = entity;
    } catch (error) {
      apiResponse.error = true;
      apiResponse.message = error.message;
    }
    return apiResponse;
  }

  async myOrders(id: number) {
    const apiResponse = new ApiResponse();
    try {
      const entity = await this.entityManager.find(Order, {
        where: { createdUserId: id },
      });
      apiResponse.data = entity;
    } catch (error) {
      apiResponse.error = true;
      apiResponse.message = error.message;
    }
    return apiResponse;
  }

  async districtOrders(districtId: number) {
    const apiResponse = new ApiResponse();
    try {
      const entity = await this.entityManager.find(Order, {
        where: { district: districtId },
      });
      apiResponse.data = entity;
    } catch (error) {
      apiResponse.error = true;
      apiResponse.message = error.message;
    }
    return apiResponse;
  }

  async selectBill(selectBillDto: SelectBillDto) {
    const apiResponse = new ApiResponse();
    try {
      const order = await this.entityManager.findOne(Order, {
        where: { createdUserId: selectBillDto.orderId },
      });
      order.selectedBillId = selectBillDto.billId;
      order.status = 2;

      const entity = await this.entityManager.save(Order, order);
      apiResponse.data = entity;
    } catch (error) {
      apiResponse.error = true;
      apiResponse.message = error.message;
    }
    return apiResponse;
  }

  async findOne(id: number) {
    const apiResponse = new ApiResponse();
    try {
      const entity = await this.entityManager.findOne(Order, {
        where: { id: id },
      });
      apiResponse.data = entity;
    } catch (error) {
      apiResponse.error = true;
      apiResponse.message = error.message;
    }
    return apiResponse;
  }

  async update(order: Order) {
    const apiResponse = new ApiResponse();
    try {
      const entity = await this.entityManager.update(
        Order,
        { id: order.id },
        order,
      );
      apiResponse.data = entity;
    } catch (error) {
      console.log(error);
      apiResponse.error = true;
      apiResponse.message = error.message;
    }

    return apiResponse;
  }

  async remove(id: number) {
    const apiResponse = new ApiResponse();
    try {
      const entity = await this.entityManager.delete(Order, id);
      apiResponse.data = entity;
    } catch (error) {
      apiResponse.error = true;
      apiResponse.message = error.message;
    }
    return apiResponse;
  }
}
