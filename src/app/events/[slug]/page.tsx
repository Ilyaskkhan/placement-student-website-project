// export detault async function Page({ params }: { params: { slug: string } }) {
//   const event = events.find((event) => event.slug === params.slug);

//   if (!event) {
//     return <div>Event not found</div>;
//   }

//   return (
//     <PageLayout>
//       <Stack justify='center'>
//         <h2>{event.title}</h2>
//         <p>{event.date}</p>       
//         </Stack>
//         </PageLayout>
// }
// }      