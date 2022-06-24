import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
});

// An object with a set of methods for each query that the API supports
// All prisma methods take two arguments: operation arguments & selection set
// We do not get the data back right away, instead it returns a promise

// prisma.query.users(null, '{ id name posts { id title } }').then(data => {
//   console.log('---------- Users Query -------------');
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.query.comments(null, '{ id text author { id name }  }').then(data => {
//   console.log('---------- Comments Query ----------');
//   console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: 'Another Test Post 2',
//         body: '',
//         published: false,
//         author: {
//           connect: {
//             id: 'cl4svvz58021c0979uo691y97',
//           },
//         },
//       },
//     },
//     '{ id title body published }'
//   )
//   .then(data => {
//     console.log('');
//     console.log('---------- Create Post ----------');
//     console.log('');

//     console.log(JSON.stringify(data, undefined, 2));
//     return prisma.query.users(null, '{ id name posts { id title } }');
//   })
//   .then(data => {
//     console.log('');
//     console.log('---------- Users Query -------------');
//     console.log('');

//     console.log(JSON.stringify(data, undefined, 2));
//   });

prisma.mutation
  .updatePost(
    {
      where: {
        id: 'cl4t0pbc800gm09795wuoqnvk',
      },
      data: {
        published: true,
      },
    },
    '{ id }'
  )
  .then(data => {
    console.log('');
    console.log('---------- Update Post ----------');
    console.log('');

    console.log(JSON.stringify(data, undefined, 2));
    return prisma.query.posts(null, '{ id title body published }');
  })
  .then(data => {
    console.log('');
    console.log('---------- Query Posts ----------');
    console.log('');

    console.log(JSON.stringify(data, undefined, 2));
  });
