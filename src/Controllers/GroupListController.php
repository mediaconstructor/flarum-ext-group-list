<?php

namespace ClarkWinkelmann\GroupList\Controllers;

use ClarkWinkelmann\GroupList\GroupListItem;
use ClarkWinkelmann\GroupList\Serializers\GroupListItemSerializer;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Group\Group;
use Flarum\Http\RequestUtil;
use Flarum\User\User;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class GroupListController extends AbstractListController
{
    public $serializer = GroupListItemSerializer::class;

    public $include = [
        'group',
        'members.groups',
    ];

    protected function data(ServerRequestInterface $request, Document $document)
    {
        RequestUtil::getActor($request)->assertCan('clarkwinkelmann-group-list.see');

        $items = GroupListItem::query()->orderBy('order')->get();
        $uu = User::query()->doesntHave('groups')->orderBy('id', 'asc')->get();

        $items->load([
            'group',
            'members',
        ]);

        // Add members without any dedicated group
        $membersWithoutGroup = new GroupListItem();
        $membersWithoutGroup->setRelation('group', Group::query()->find(Group::MEMBER_ID))
            ->setRelation('members', $uu);
        $items->add($membersWithoutGroup);

        return $items;
    }
}
