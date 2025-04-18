import * as cdk from '../../../core';
import { AthenaGetQueryExecution } from '../../lib/athena/get-query-execution';

describe('Get Query Execution', () => {
  test('default settings', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const task = new AthenaGetQueryExecution(stack, 'Query', {
      queryExecutionId: '2da557a1-7283-4c3d-8af9-058348f0bb02',
    });

    // THEN
    expect(stack.resolve(task.toStateJson())).toEqual({
      Type: 'Task',
      Resource: {
        'Fn::Join': [
          '',
          [
            'arn:',
            {
              Ref: 'AWS::Partition',
            },
            ':states:::athena:getQueryExecution',
          ],
        ],
      },
      End: true,
      Parameters: {
        QueryExecutionId: '2da557a1-7283-4c3d-8af9-058348f0bb02',
      },
    });
  });

  test('default settings - using JSONata', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const task = AthenaGetQueryExecution.jsonata(stack, 'Query', {
      queryExecutionId: '2da557a1-7283-4c3d-8af9-058348f0bb02',
    });

    // THEN
    expect(stack.resolve(task.toStateJson())).toEqual({
      Type: 'Task',
      QueryLanguage: 'JSONata',
      Resource: {
        'Fn::Join': [
          '',
          [
            'arn:',
            {
              Ref: 'AWS::Partition',
            },
            ':states:::athena:getQueryExecution',
          ],
        ],
      },
      End: true,
      Arguments: {
        QueryExecutionId: '2da557a1-7283-4c3d-8af9-058348f0bb02',
      },
    });
  });
});
