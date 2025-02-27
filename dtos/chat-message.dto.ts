import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ChatMessageDto {
  @ApiProperty({
    description: 'The ID of the user sending the message',
    example: 'user-123',
  })
  @IsString()
  @IsNotEmpty()
  senderId: string = '';

  @ApiPropertyOptional({
    description: 'The chat group ID if the message is being sent to a group. For direct messages, this field can be omitted.',
    example: 'group-456',
  })
  @IsOptional()
  @IsString()
  groupId?: string;

  @ApiPropertyOptional({
    description: 'The text content of the chat message. This field is optional if the message only contains an attachment.',
    example: 'Hello, team!',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description: 'A URL or file path for an attachment, such as an image or document, if any.',
    example: 'https://example.com/image.png',
  })
  @IsOptional()
  @IsString()
  attachmentUrl?: string;
}
