import { Button, Input, Modal, Typography } from '@/components';
import type { ModalWebHookEventsProps } from '@/types';
import { BellRing, Plus, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { ListModal } from '../../applications/listModal/listModal';
import * as S from './modalWebHookEvents.styles';

const eventNamePattern = /^[A-Za-z0-9_-]+\.(?:[A-Za-z0-9_-]+|\*)$/;

export const ModalWebHookEvents = ({ isOpen, webHook, onClose }: ModalWebHookEventsProps) => {
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState<string[]>(webHook?.eventCategories ?? []);
  const eventNameError = eventName.trim() && !eventNamePattern.test(eventName.trim()) ? 'Use o formato identificador.evento ou identificador.*' : '';
  const canAddEvent = Boolean(eventName.trim()) && !eventNameError && !events.includes(eventName.trim());

  const handleAddEvent = useCallback(() => {
    if (!canAddEvent) return;

    setEvents((currentEvents) => [...currentEvents, eventName.trim()]);
    setEventName('');
  }, [canAddEvent, eventName]);

  const handleRemoveEvent = useCallback((event: string) => {
    setEvents((currentEvents) => currentEvents.filter((currentEvent) => currentEvent !== event));
  }, []);

  useEffect(() => {
    setEventName('');
    setEvents(webHook?.eventCategories ?? []);
  }, [webHook, isOpen]);

  return <Modal isOpen={isOpen} onClose={onClose} ariaLabel='Modal de eventos do webhook' >
    <ListModal
      title="Eventos do WebHook"
      subtitle="Defina quais eventos podem ser recebidos por este WebHook."
      onClose={onClose}
      actions={<Button type="button">Salvar eventos</Button>}
      icon={<BellRing color="#9d2dfd" />}
    >
      <S.EventsContent>
        <S.AddEventForm onSubmit={(event) => {
          event.preventDefault();
          handleAddEvent();
        }}>
          <div>
            <Input
              label="Evento"
              name="event"
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
              placeholder="Ex: order.created ou order.*"
              helperText="Informe identificador.evento para um evento especifico ou identificador.* para todos."
            />
            {eventNameError && <S.ErrorText>{eventNameError}</S.ErrorText>}
          </div>
          <Button type="submit" disabled={!canAddEvent}>
            <Plus size={16} />
            Adicionar
          </Button>
        </S.AddEventForm>
        {events.length ?
          <S.EventsList>
            {events.map((event) => (
              <S.EventRow key={event}>
                <Typography fontWeight={700}>{event}</Typography>
                <S.RemoveButton
                  type="button"
                  aria-label={`Remover evento ${event}`}
                  onClick={() => handleRemoveEvent(event)}
                >
                  <Trash2 size={16} />
                </S.RemoveButton>
              </S.EventRow>
            ))}
          </S.EventsList> :
          <S.EmptyEvents>
            <Typography color="#555555">Nenhum evento vinculado a este WebHook.</Typography>
          </S.EmptyEvents>}
      </S.EventsContent>
    </ListModal>
  </Modal>
}
