'use client';

import PageLayout from '@/app/genericLayout';
import { ReactNode } from 'react';
import { events } from '../data';
import { Flex, Button, Image, List, Stack, Group, Card, Badge, Box } from '@mantine/core';
import styles from './events.module.css';

export default function Events(): ReactNode {
  const eventsData = events;
  return (
    <PageLayout>
      <Stack justify='center'>

        <Box bg="rgb(46, 107, 80)">

        <h2>Welcome to the Meadow</h2>
        <p>Two days of music, dance and craft in the heart of the British countryside </p>
         <Button component='a' href="/tickets">
           Buy Tickets
         </Button>
          
          </Box>



          {eventsData.map((event) => (
            
              
              
            
              <Card shadow="sm" withBorder radius="lg"key={event.title} component='a' href={`events/${event.slug}`}>
               <Stack>
                <Group justify="space-between">
                
                  <Badge color="blue" radius="sm">{event.category}</Badge>
                  <Badge>age</Badge>
                </Group>

               
                <h3>{event.title}</h3>
                <p>{event.date}</p> 


                <Group> 
                <Badge leftSection={"⏰"} variant="transparent" color="gray" >{event.time}</Badge>
                <Badge color="gray" variant="transparent">{event.venue}</Badge>
                </Group>



                 <p>{event.description}</p> 


                 <Button
                  component='a'
                  className={styles.button}
                  href={event.ticketLink}
              >
                  Tickets
                </Button>  
              </Stack>


               {event.image && (
                <Image
                  className={styles.image}
                  src={event.image}
                  h={300}
                  width={'auto'}
                  fit='contain'
                />
              )} 


              
            
            </Card>
          ))}
        
      </Stack>
    </PageLayout>
  );
}
