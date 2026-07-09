'use client';

import PageLayout from '@/app/genericLayout';
import { ReactNode } from 'react';
import { events } from '../data';
import { Flex, Button, Image, List, Stack, Group, Card, Badge, Box, Title, Text, Paper,} from '@mantine/core';
import styles from './events.module.css';

export default function Events(): ReactNode {
  const eventsData = events;
  return (
    <PageLayout>
      <Stack justify='center'>

        <Paper px="md" py="xl" bg="rgb(46, 107, 80)" radius="lg" my="lg">

        <Title order={2} c='white'>Welcome to the Meadow</Title>
        <Text c='white'>Two days of music, dance and craft in the heart of the British countryside </Text>
         <Button component='a' href="/tickets" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} >
           Buy Tickets
         </Button>
          
          </Paper>



          {eventsData.map((event) => (
            
              
              
            
              <Card shadow="sm" withBorder radius="lg"key={event.title} component='a' href={`events/${event.slug}`}>
               <Stack>
                <Group justify="space-between">
                
                  <Badge variant="gradient" gradient={{ from: 'darkGreen', to: 'cyan' }} radius="sm">
                    {event.category}
                  </Badge>
                  <Badge variant="gradient" gradient={{ from: 'darkGreen', to: 'cyan' }} >
                    5+
                  </Badge>
                </Group>

               
                <h3>{event.title}</h3>
                <p>{event.date}</p> 


                <Group> 
                <Badge leftSection={"⏰"} variant="transparent" color="gray" >{event.time}</Badge>
                <Badge color="gray" variant="transparent">{event.venue}</Badge>
                </Group>



                 <p>{event.description}</p> 


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
